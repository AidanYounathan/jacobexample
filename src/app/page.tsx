'use client'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <h1 className="text-center text-lg">Favorite Food Form</h1>
        <div className="bg-white shadow-md rounded p-8">
          <div className="mb-4">
            <label  className="block rounded p-3">
              Name
            </label>
            <input type="text" placeholder="Name" name="name" className="border rounded p-3" />
          </div>
          <div className="mb-4">
            <label  className="block rounded p-3">
              Favorite Food
            </label>
            <input type="text" placeholder="Food" name="food" className="border rounded p-3" />
          </div>
          <button type="button" className="text-white py-2 px-4 rounded bg-red-500 hover:bg-red-700">Clear</button>
        </div>
      </form>
    </main>
  );
}
