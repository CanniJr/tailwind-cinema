import HeaderItem from "./HeaderItem"
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline';

function Header() {
    return (
        <header className="">
            <div className="flex flex-grow justify-evenly">
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
                <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                <HeaderItem title='ACCOUNT' Icon={HomeIcon}/>
            </div>
        </header>
    )
}

export default Header
