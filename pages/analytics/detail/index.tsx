import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import React from "react";
import { Detail as Component } from "../../../src/pages/Analytics/Detail";

const Detail = ({ res }: { res: any }): JSX.Element => <Component />;

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

    const res = {
        a: 'b'
    }
    return {
        props: res
    }
}

export default Detail;