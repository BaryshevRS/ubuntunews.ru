import { Footer } from "../footer";
import { IPostData } from "../../lib/posts";
import { TopPosts } from "../top-posts";
import { ThemeToggle } from "../theme-toggle/theme-toggle";

interface IProps {
  children?: React.ReactNode;
  topPosts?: IPostData[];
}

export const Sidebar: React.FC<IProps> = ({topPosts}) => {
  return (
    <aside className={'sidebar'}>
      {topPosts && <TopPosts topPosts={topPosts}/>}
      <Footer/>
      <ThemeToggle />
    </aside>
  )
};
