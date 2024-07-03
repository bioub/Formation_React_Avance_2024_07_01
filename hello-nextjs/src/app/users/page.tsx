'use client';

export default async function Users() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <main>
      <h1>Users Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsa,
        voluptatem, ratione pariatur veritatis a explicabo excepturi nulla
        temporibus, cum expedita non labore facilis at quo atque nostrum
        necessitatibus quibusdam.
      </p>
      <ul>
        {users.map((u) => <li key={u.id} onClick={() => { console.log(u) }}>{u.name}</li>)}
      </ul>
    </main>
  );
}
