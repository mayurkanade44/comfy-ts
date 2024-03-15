import { CartButton, Logo, LinksDropdown, NavLinks, ModeToggle } from ".";

export const Navbar = () => {
  return (
    <div className="bg-muted py-4">
      <div className="align-element flex justify-between items-center">
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className="flex justify-center items-center">
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </div>
  );
};
