import React, { useEffect, useState } from 'react';
import { postulates as descriptions } from '../../../lib/descriptions';
import Dashboard from '../../../components/Dashboard';
import { documentTitle } from '../../../lib/utils';


const currentSection = 'Postulates of Order'; // Replace with your current section
const postulates = [1, 2, 3, 4, 5, 6, 7]; // Replace with your postulates

const titles = {
    1: "Existence",
    2: "Betweenness",
    3: "Distinctness",
    4: "Order Reversal",
    5: "Transitivity of Betweenness",
    6: "Betweenness Reversal",
    7: "Completeness",
};

// Create a mapping of postulate IDs to component import functions
const postulateComponents = {
    postulate1: () => import('../../../lib/basics/postulates/order/postulate1'),
    postulate2: () => import('../../../lib/basics/postulates/order/postulate2'),
    postulate3: () => import('../../../lib/basics/postulates/order/postulate3'),
    postulate4: () => import('../../../lib/basics/postulates/order/postulate4'),
    postulate5: () => import('../../../lib/basics/postulates/order/postulate5'),
    postulate6: () => import('../../../lib/basics/postulates/order/postulate6'),
    // Add more postulates as needed
};

const OrderPostulates = () => {

    documentTitle(currentSection);

    return (
        <Dashboard
            titles={titles}
            descriptions={descriptions}
            currentSection={currentSection}
            theorems={postulates}
            theoremComponents={postulateComponents}
        />
    );

}

export default OrderPostulates;
