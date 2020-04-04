import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import Assignments1Container from '../../components/Assignments1';
import { URL_ASSIGNMENTS_1 } from '../../core/routes/constants';

const Assignments1 = () => {
    const breadcumbData = [
        {
            id: 1,
            url: URL_ASSIGNMENTS_1,
            label: 'Assignments1',
        },
    ];

    return (
        <>
            <Breadcrumb data={breadcumbData} />
            <Assignments1Container />
        </>
    );
};

export default Assignments1;
