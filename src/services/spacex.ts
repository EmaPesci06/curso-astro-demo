import { type Doc, type APISpaceXResponse } from "../types/api";

export const getSpaceXLaunches = async () => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                limit: 20,
            },
        }),
    });

    const { docs: launches } = (await res.json()) as APISpaceXResponse;

    return launches
}

export const getSpaceXLaunchesById = async ({ id }: { id: string }) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

    const launch = (await res.json()) as Doc;

    return launch
}