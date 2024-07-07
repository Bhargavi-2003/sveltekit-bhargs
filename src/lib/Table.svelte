<!-- <script>
    export let names
</script>

<div
	class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
	<div class="flex items-center justify-between mb-4">
		<div class="space-y-1">
			<h2 class="text-xl font-semibold">List of Users</h2>
			<p class="text-sm text-gray-500">
				Fetched {names.length} users
			</p>
		</div>
	</div>
	<div class="divide-y divide-gray-900/5">
		{#each names as user (user.id)}
			<div class="flex items-center justify-between py-3">
				<div class="flex items-center space-x-4">
					<div class="flex">
						<p class="font-medium pt-1 leading-none">{user.name}</p>
						<p class="font-medium pl-5 text-gray-500 pt-0">{user.email}</p>                        
					</div>
				</div>
                <form method="POST" action="/profiles?/delete">
                <input type="hidden" name="id" id="id" value={user.id}>
                <button type="submit">
                    <img class="w-4 float-right" src="./trash-can.svg" alt="delete"/>
                </button>
                </form>
			</div>
		{/each}
	</div>
</div> -->

<!-- <script>
    export let names;
</script>

<div
	class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
	<div class="flex items-center justify-between mb-4">
		<div class="space-y-1">
			<h2 class="text-xl font-semibold">List of Users</h2>
			<p class="text-sm text-gray-500">
				Fetched {names.length} users
			</p>
		</div>
	</div>
	<div class="divide-y divide-gray-900/5">
		{#each names as user (user.id)}
			<div class="flex items-center justify-between py-3">
				<div class="flex items-center space-x-4">
					<div class="flex">
						<p class="font-medium pt-1 leading-none">{user.name}</p>
						<p class="font-medium pl-5 text-gray-500 pt-0">{user.email}</p>                        
					</div>
				</div>
				<div class="flex space-x-2">
                    <form method="POST" action="/profiles?/delete">
                        <input type="hidden" name="id" id="id" value={user.id}>
                        <button type="submit" >
                        <button type="submit" class="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Delete
                        </button>
                    </form>
                    <form method="POST" action="/profiles?/update" class="flex items-center space-x-2">
                        <input type="hidden" name="id" value={user.id}>
                        <input 
                            type="email" 
                            name="email" 
                            value={user.email} 
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                        <input 
                            type="text" 
                            name="name" 
                            value={user.name} 
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                        <button type="submit" class="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Update
                        </button>
                    </form>
				</div>
			</div>
		{/each}
	</div>
</div> -->

<script>
	export let names;
	export let form;
  </script>
  
  <div class="mt-10 pt-10 w-full max-w-5xl mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
	<div class="flex flex-wrap">
	  <!-- Applicant Form -->
	  <div class="w-full md:w-1/2 p-6">
		<strong>Create Applicant</strong>
		<form method="POST" action="?/create">
		  <div class="w-full mb-6">
			<label
			  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
			  for="name"
			>
			  Name
			</label>
			<input
			  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
			  id="name"
			  type="text"
			  placeholder="Enter name"
			  name="name"
			  required
			/>
		  </div>
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
			  type="email"
			  placeholder="Enter email"
			  name="email"
			  required
			/>
		  </div>
		  <button
			type="submit"
			class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 px-4 py-2 rounded"
		  >
			Create Applicant
		  </button>
		</form>
		{#if form?.success}
		  <p class="pt-2">Added new Applicant!</p>
		{/if}
	  </div>
  
	  <!-- List of Users -->
	  <div class="w-full md:w-1/2 p-6">
		<div class="flex items-center justify-between mb-4">
		  <div class="space-y-1">
			<h2 class="text-xl font-semibold">List of Users</h2>
			<p class="text-sm text-gray-500">
			  Fetched {names.length} users
			</p>
		  </div>
		</div>
		<div class="divide-y divide-gray-900/5">
		  {#each names as user (user.id)}
			<div class="flex items-center justify-between py-3">
			  <div class="flex items-center space-x-4">
				<div class="flex">
				  <p class="font-medium pt-1 leading-none">{user.name}</p>
				  <p class="font-medium pl-5 text-gray-500 pt-0">{user.email}</p>                        
				</div>
			  </div>
			  <div class="flex space-x-2">
				<form method="POST" action="/profiles?/delete">
				  <input type="hidden" name="id" id="id" value={user.id}>
				  <button type="submit" class="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					Delete
				  </button>
				</form>
				<form method="POST" action="/profiles?/update" class="flex items-center space-x-2">
				  <input type="hidden" name="id" value={user.id}>
				  <input 
					type="email" 
					name="email" 
					value={user.email} 
					class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
					required>
				  <input 
					type="text" 
					name="name" 
					value={user.name} 
					class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
					required>
				  <button type="submit" class="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					Update
				  </button>
				</form>
			  </div>
			</div>
		  {/each}
		</div>
	  </div>
	</div>
  </div>
  