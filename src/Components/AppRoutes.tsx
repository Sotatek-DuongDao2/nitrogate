import { Route } from "react-router-dom";

import { IRoute } from "@interfaces";
import { AppLayout } from "@layouts";

export const ComponentAppRoute = (props: IRoute) => {
    // props
    const { path, exact } = props;
    //page variable
    const Component = props.component;
    const Layout = props.layout || AppLayout;
    return (
        <Route
            path={path}
            exact={exact}
            render={() => (
                <Layout>
                    <Component />
                </Layout>
            )}
        />
    );
};
