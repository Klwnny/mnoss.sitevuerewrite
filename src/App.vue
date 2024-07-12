<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav role="group">
    <RouterLink to="/"><button>to Home</button> </RouterLink>
    <RouterLink to="/about"><button>Go to About</button></RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
