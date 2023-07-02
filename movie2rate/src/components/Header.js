const style = {
  header:
    "w-full bg-purple-500 h-16 col-span-2 flex items-center justify-between px-10 rounded-t-xl font-bold text-white",
  h1: "flex items-center bg-blue-700 shadow-md rounded-2xl px-5 py-1 text-xl",
  logo: "text-3xl text-red-400 rotate-12 italic bg-slate-100 h-10 w-10 text-center rounded-full mx-1",
  input:
    "font-normal w-3/6 h-12 rounded-xl bg-purple-400 px-3 py-2 border-2 border-transparent focus:border-white outline-none shadow text-black placeholder:text-white",
};

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.h1}>
        <p>Movie</p>
        <p className={style.logo}>2</p>
        <p>watch</p>
      </h1>
      <input
        type="text"
        className={style.input}
        placeholder="Search you favorite movie here..."
        autoFocus
      />
      <p>0 movie(s) found</p>
    </header>
  );
}
