import { Button } from "./Button";

type GenreResponseProps = Array< {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}>

interface SidebarProps {
  genres: GenreResponseProps;
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>;
  selectedGenreId: number;
}



export const SideBar: React.FC<SidebarProps> = ({genres, setSelectedGenreId, selectedGenreId}) => {

  const  handleClickButton = (id: number): void => {
    setSelectedGenreId(id);
  }

  return(
  <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {genres.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClickButton(genre.id)}
        selected={selectedGenreId === genre.id}
      />
    ))}
  </div>
</nav>
  )
}