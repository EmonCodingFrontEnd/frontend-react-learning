import yayJpg from '../assets/yay.jpg';
import {FormattedMessage, useIntl} from 'umi';
import {Alert} from "antd";

export default function HomePage() {
    const intl = useIntl();
    const msg = intl.formatMessage({
        id: 'welcome',
    });

    return (
        <div>
            <h2>Yay! Welcome to umi! <FormattedMessage id="welcome"/></h2>
            <p>
                <img src={yayJpg} width="388"/>
            </p>
            <p>
                To get started, edit <code>pages/index.tsx</code> and save to reload.
            </p>
            <Alert message={msg} type="success"/>
        </div>
    );
}
