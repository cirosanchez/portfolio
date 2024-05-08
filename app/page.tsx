import Introduction from "@/app/component/Introduction";
import AboutMe from "@/app/component/AboutMe";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row p-4 justify-around bg-zinc-800">
          <div className={"flex flex-row gap-1.5 absolute left-4"}>
              <svg color={"#4ade80"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
              </svg>
              <a href={"https://discord.cirosanchez.me"} target={"_blank"} className={"hover:text-green-400 transition-all delay-100"}>Ciro</a>
          </div>
          <ul className={"flex flex-row justify-center gap-14"}>
              <li className="text-green-50 bg-transparent hover:text-green-400 transition-all delay-100">-</li>
              <li className="text-green-50 bg-transparent hover:text-green-400 transition-all delay-100">-</li>
              <li className="text-green-50 bg-transparent hover:text-green-400 transition-all delay-100">-</li>
          </ul>
      </div>
        <Introduction />
        <div className={"h-36"}></div>
    </main>
  );
}
