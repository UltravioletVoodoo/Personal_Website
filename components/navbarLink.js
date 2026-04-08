export function NavbarLink(props) {
  const { text, href } = props;

  return <a href={href}>{text}</a>;
}
