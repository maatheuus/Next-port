function Footer() {
  return (
    <footer className="relative">
      <div className="px-12 flex justify-end h-full w-full">
        <p className="mr-2">@{new Date().getFullYear()} Matheus</p>
        <p>&copy; All the right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
