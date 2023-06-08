import * as React from "react";
import HomePage from "@/Components/Home";
import DatePicker from "@/Components/Date";
import { ProgressDemo } from "@/Components/Progress";
import { CardWithForm } from "@/Components/Card";

const Home = () => {
    return (
        <>
            <HomePage />
            <DatePicker />
            <ProgressDemo />
            <CardWithForm />
        </>
    )
};

export default Home;