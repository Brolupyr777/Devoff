<script>
    import { supabase } from '$lib/supabaseClient';
    let name = '<Weboff>';
    console.log(supabase);
</script>

<nav>
    <h1>{name}</h1>
    <a href="/Home" class="links">Home</a>
    <a href="/Discover" class="links">Discover</a>
    <a href="/My-Account" class="links">My Account</a>
        <form class="search">
        
        </form>
</nav>

<style>
    *{
        font-family: 'Belanosima', sans-serif;
        font-family: 'Noto Sans', sans-serif;
    }
    .links{
        text-decoration: none;
    }
</style>

<slot />