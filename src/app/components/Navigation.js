import SparklesIcon from '../icons/sparkles.svg'
import ChevronIcon from '../icons/chevron.svg'
import MarioIcon from '../icons/mario.svg'

export default function Navigation({ onChatToggle }) {
    return (
        <nav className="h-[60px] bg-grey-200 z-50 relative border-b border-grey-400 flex items-center px-[20px]">
            <div className="flex items-center gap-[8px]">
                <MarioIcon />
                <ChevronIcon className="[&>path]:fill-grey-600" />
                <span className="text-grey-800">eShop-product</span>
            </div>

            <div className="flex items-center gap-[20px] mx-auto">
                <a href="#" className="text-grey-800 hover:text-grey-900">Screens</a>
                <a href="#" className="text-grey-800 hover:text-grey-900">Usecase</a>
                <a href="#" className="text-grey-900">Testcase</a>
                <a href="#" className="text-grey-800 hover:text-grey-900">Ticket</a>
                <a href="#" className="text-grey-800 hover:text-grey-900">Database</a>
                <a href="#" className="text-grey-800 hover:text-grey-900">API</a>
            </div>
            <button
                onClick={onChatToggle}
                className="flex justify-center items-center rounded-[12px] w-[24px] h-[24px] bg-grey-400 border border-grey-500 absolute right-[20px] top-1/2 -translate-y-1/2"
            >
                <SparklesIcon />
            </button>
        </nav>
    )
}