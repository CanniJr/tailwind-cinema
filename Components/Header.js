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
            <div>
                <HeaderItem title='HOME'Icon={HomeIcon}/>
            </div>
        </header>
    )
}

export default Header
