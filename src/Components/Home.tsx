import { Button } from "../../components/ui/button";
import { Mail } from "lucide-react";

const HomePage = () => {
    return (
        <div className="flex flex-col justify-center items-center my-8">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                Learn Shadcn UI
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-2xl my-2">
                Once upon a time, in a far-off land, there was a very lazy king who
                spent all day lounging on his throne.
            </p>
            <Button className="bg-blue-700 p-6 text-lg hover:bg-white hover:text-black">
                <Mail className="mr-4 h-6 w-6" />
                Login with Email
            </Button>
        </div>
    )
};

export default HomePage;