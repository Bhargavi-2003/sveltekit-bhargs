import NeucronSDK from "neucron-sdk";

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request }) => {
        try {
            const data = await request.formData();

            const neucron = new NeucronSDK();

            const authModule = neucron.authentication;
            const walletModule = neucron.wallet;

            const loginResponse = await authModule.login({ email: data.get('email'), password: data.get('password') });
            console.log(loginResponse);

            const defaultWalletBalance = await walletModule.getWalletBalance({});
            console.log(defaultWalletBalance);

            return { success: true, balance: defaultWalletBalance.data.balance.summary };
        } catch (error) {
            console.error("Login failed:", error);
            return { success: false, error: "Login failed. Please check your credentials and try again." };
        }
    },
    pay: async ({ request }) => {
        try {
            const data = await request.formData();

            const neucron = new NeucronSDK();

            const authModule = neucron.authentication;
            const walletModule = neucron.wallet;

            const loginResponse = await authModule.login({ email: data.get('email'), password: data.get('password') });
            console.log(loginResponse);

            const paymail = data.get("paymail");
            const amount = parseFloat(data.get("amount"));

            const options = {
                outputs: [
                    {
                        address: paymail,
                        note: 'hi',
                        amount: amount,
                    }
                ]
            };
            console.log(options);

            const payResponse = await neucron.pay.txSpend(options);
            console.log(payResponse);

            return { success: true, payment: `https://whatsonchain.com/tx/${payResponse.data.txid}` };
        } catch (error) {
            console.error("Payment request failed:", error);
            return { success: false, error: "Payment request failed. Please check the payment details and try again." };
        }
    }
};
