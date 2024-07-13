<script>
  /** @type {import('./$types').Actions} */
  export let form;
</script>

<div class="mt-10 pt-10 w-full max-w-5xl mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
  <div class="flex flex-wrap">
    <!-- Login Form -->
    <div class="w-full md:w-1/2 p-6">
      <strong class="p-30">LOGIN</strong>
      <form method="POST" action="?/login">
        <div class="w-full mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="text"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="w-full mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            type="text"
            placeholder="Enter password"
            name="password"
          />
        </div>
        <button
          type="submit"
          class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 px-4 py-2 rounded justify-center">
          Login
        </button>
      </form>
      {#if form?.success}
        <p class="pt-2">Logged In. Your balance is {form?.balance}!</p>
      {/if}
      {#if form?.error}
        <p class="pt-2 text-red-600">Error: {form?.error}</p>
      {/if}
    </div>

    <!-- Payment Form -->
    <div class="w-full md:w-1/2 p-6">
      <strong class="p-30">PAYMENT</strong>
      <form method="POST" action="?/pay">
        <div class="w-full mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="text"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="w-full mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            type="text"
            placeholder="Enter password"
            name="password"
          />
        </div>
        <div class="w-full mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="paymail"
          >
            Paymail
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="paymail"
            type="text"
            placeholder="Enter paymail"
            name="paymail"
          />
        </div>
        <div class="w-full mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="amount"
          >
            Amount
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="amount"
            type="number"
            placeholder="Enter amount"
            name="amount"
          />
        </div>
        <button
          type="submit"
          class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 px-4 py-2 rounded"
        >
          Pay
        </button>
      </form>
      {#if form?.success}
        <p class="pt-2">Payment successful. Here is your <a href ="{form?.payment}" class="hover:text-blue-600 underline" target="_blank" >Transaction</a> !</p>
      {/if}
      {#if form?.error}
        <p class="pt-2 text-red-600">Error: {form?.error}</p>
      {/if}
    </div>
  </div>
</div>
