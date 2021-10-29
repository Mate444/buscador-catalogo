const NavBar = () => {
  const navBarItems = [
    {
      name: 'Shipping',
      id: 1,

    },
    {
      name: 'About',
      id: 2,
    },
  ]
  return (
    <div>
      {
        navBarItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default NavBar;
