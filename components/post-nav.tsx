// import ArrowLeftIcon from "../public/assets/icons/arrow-left.svg";
// import Link from "next/link";
// import ArrowRightIcon from "../public/assets/icons/arrow-right.svg";

interface IProp {
    children?: React.ReactNode;
}

export const PostNav: React.FC<IProp> = () => {
    return (
        <ul className={'post-nav'}>
{/*            <li>
                <ArrowLeftIcon/>
                <Link href={`/2`}  ">Дайджест новостей Ubuntu №7: GRUB и оценка привлечения крупных
                    производителей </Link>
            </li>
            <li>
                <Link href={`/2`} >Дайджест новостей Ubuntu №7: GRUB и оценка </Link>
                <ArrowRightIcon/>
            </li>*/}
        </ul>
    )
};
