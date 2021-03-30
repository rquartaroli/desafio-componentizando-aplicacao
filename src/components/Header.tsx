import '../styles/header.scss';

interface HeaderProps {
  selectedGenre: string;
}

export function Header({ selectedGenre }: HeaderProps) {
    return (
      <header>
        <span className="category">Categoria:<span> {selectedGenre}</span></span>
      </header>
    )
}