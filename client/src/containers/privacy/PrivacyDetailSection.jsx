'use strict';

import React from 'react';

import './PrivacyDetailSection.scss';

class PrivacyDetailSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionPrivacy = this.sectionPrivacy.bind(this);
    }

    sectionPrivacy() {
        return <div className="privacyDetailSection">
            <div className="privacyDetailText">
                <p>Learnable.ai offers a wide range of products, including server educational products used to help students and teachers worldwide, new-retail products providing personalized marketing and pricing strategies, and AI products in other industries. References to Learnable.ai products in this statement include Learnable.ai services, websites, apps, software, servers, and devices.</p>
                <p>Please read the product-specific details in this privacy statement, which provide additional relevant information. This statement applies to the interactions Learnable.ai has with you and the Learnable.ai products listed below, as well as other Learnable.ai products that display this statement.</p>
                <br />
                <h3>Personal data we collect</h3>
                <br />
                <p>Learnable.ai collects data from you, through our interactions with you and through our products. You provide some of this data directly, and we get some of it by collecting data about your interactions, use, and experiences with our products. The data we collect depends on the context of your interactions with Learnable.ai and the choices you make, including your privacy settings and the products and features you use. We also obtain data about you from third parties.</p>
                <p>You have choices when it comes to the technology you use and the data you share. When we ask you to provide personal data, you can decline. Many of our products require some personal data to provide you with a service. If you choose not to provide data necessary to provide you with a product or feature, you cannot use that product or feature. Likewise, where we need to collect personal data by law or to enter into or carry out a contract with you, and you do not provide the data, we will not be able to enter into the contract; or if this relates to an existing product you’re using, we may have to suspend or cancel it. We will notify you if this is the case at the time. Where providing the data is optional, and you choose not to share personal data, features like personalization that use such data will not work for you.</p>
                <br />
                <h3>How we use personal data</h3>
                <br />
                <p>Learnable.ai uses the data we collect to provide you with rich, interactive experiences. In particular, we use data to:</p>
                <p>•	Provide our products, which includes updating, securing, and troubleshooting, as well as providing support. It also includes sharing data, when it is required to provide the service or carry out the transactions you request.</p>
                <p>•	Improve and develop our products.</p>
                <p>•	Personalize our products and make recommendations.</p>
                <p>•	Advertise and market to you, which includes sending promotional communications, targeting advertising, and presenting you with relevant offers.</p>
                <p>We also use the data to operate our business, which includes analyzing our performance, meeting our legal obligations, developing our workforce, and doing research.</p>
                <p>In carrying out these purposes, we combine data we collect from different contexts (for example, from your use of two Learnable.ai products) or obtain from third parties to give you a more seamless, consistent, and personalized experience, to make informed business decisions, and for other legitimate purposes.</p>
                <br />
                <h3>Who will us share user personal data with</h3>
                <br />
                <p>•	Personal data will be shared with third parties that are under contract with Learnable.ai to perform a service or function on behalf of Learnable.ai.</p>
                <p>•	Aggregate data that was generated from personal data and has been statistically reviewed to insure non-identification through its use, may be shared and used by Learnable.ai with third parties not under contract.</p>
                <p>•	Under no circumstances will personal data be sold to a third party.</p>
                <p>•	Personal data may be required to be disclosed to other parties when required by law or as necessary to protect Learnable.ai services.</p>
                <p>•	We may disclose personal data to third parties in order to protect the legal rights, safety, and security of Learnable.ai, our affiliates, business partners, and users of our services.</p>
                <p>•	We may share personal information to enforce our terms of use, resolve claims or complaints, prevent fraud or for risk management purposes.</p>
                <p>•	Personal information may be shared to comply with or respond to law enforcement or legal processes or a request for cooperation from a government or other entity, whether or not legally required.</p>
                <br />
                <h3>How can I contact Learnable.ai about questions and concerns related to personal data collected?</h3>
                <br />
                <p>Please direct your written questions to: contact@learnable.ai</p>
            </div>
        </div>
    }

    render() {
        return this.sectionPrivacy();
    }
}

export default PrivacyDetailSection;