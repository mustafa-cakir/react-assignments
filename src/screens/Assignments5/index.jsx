import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import Assignments5Container from '../../components/Assignments5';
import { URL_ASSIGNMENTS_5 } from '../../core/routes/constants';

const Assignments5 = () => {
    const breadcumbData = [
        {
            id: 1,
            url: URL_ASSIGNMENTS_5,
            label: 'Assignments5',
        },
    ];

    return (
        <>
            <Breadcrumb data={breadcumbData} />
            <Assignments5Container />
        </>
    );
};

export default Assignments5;
