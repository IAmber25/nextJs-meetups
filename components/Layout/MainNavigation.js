import Link from "next/link";

function MainNavigation() {
  return (
    <header className="flex justify-between p-3 bg-orange-300">
      <div className="px-3 py-1 rounded-lg bg-orange-400 text-black">React Meetups</div>
      <nav >
        <ul className="flex gap-2">
          <li className="px-3 py-1 rounded-lg bg-slate-500 text-white" >
            <Link href="/">All Meetups</Link>
          </li>
          <li className="px-3 py-1 rounded-lg bg-slate-500 text-white">
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
