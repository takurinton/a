import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import React from "react";
import { Analytics as Component } from "../../src/pages/Analytics";

const Analytics = ({ res }: { res: any }): JSX.Element => <Component />;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                permanent: false,
                destination: '/401'
            }
        }
    }

    // const url = `https://api.takurinton.com/admin/blog`;
    // return await fetcher({
    //     url,
    //     method: 'GET',
    //     token: session.token,
    // });

    const res = {
        a: 'b'
    }
    return {
        props: res
    }
}

export default Analytics;