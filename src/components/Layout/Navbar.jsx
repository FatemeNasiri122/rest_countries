import ChangeTheme from "../ui/ChangeTheme";

const Navbar = () => {
  return (
    <nav className="bg-white-color dark:bg-dark-color flex items-center justify-between p-4 md:py-4 md:px-14.5 text-black dark:text-white-color shadow-nav dark:shadow-none">
      <p className="font-semibold">Where in the world?</p>
      <ChangeTheme />
    </nav>
  )
}

export default Navbar;