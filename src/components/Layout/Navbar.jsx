import ChangeTheme from "../ui/ChangeTheme";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 bg-white-color dark:bg-dark-color shadow-nav dark:shadow-none">
      <div className="max-w-[1440px] m-auto flex items-center justify-between p-4 md:py-4 md:px-14.5 text-black dark:text-white-color">
        <p className="font-semibold">Where in the world?</p>
        <ChangeTheme />
      </div>
    </nav>
  )
}

export default Navbar;