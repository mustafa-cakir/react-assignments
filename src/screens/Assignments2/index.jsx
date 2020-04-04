import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import Assignments2Container from '../../components/Assignments2';
import { URL_ASSIGNMENTS_2 } from '../../core/routes/constants';

const Assignments2 = () => {
    const breadcumbData = [
        {
            id: 1,
            url: URL_ASSIGNMENTS_2,
            label: 'Assignments2',
        },
    ];

    return (
        <>
            <Breadcrumb data={breadcumbData} />
            <Assignments2Container />
        </>
    );
};

export default Assignments2;
