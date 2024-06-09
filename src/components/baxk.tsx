import { useRouter } from "next/navigation"
import Button from "./button"
import { ChevronLeftIcon } from "@heroicons/react/solid";

const Back = ({ onBack }: { onBack?: () => {} }) => {
    const router = useRouter();
    return (
        <Button onClick={onBack ?? router.back} className="absolute t-5 l-5 z-50 bg-white dark:bg-black w-10 h-10">
            <ChevronLeftIcon className="w-10 h-10 text-black dark:text-white" />
        </Button>
    );
}
export default Back;