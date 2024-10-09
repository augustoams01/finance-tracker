import headerStyles from './header.module.css';

function Header() {
  return (
    <header className={headerStyles.container}>
        <h1 className={headerStyles.title}>Controle de gastos financeiros</h1>
    </header>
  )
}

export default Header