import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import Assignments3Container from '../../components/Assignments3';
import { URL_ASSIGNMENTS_3 } from '../../core/routes/constants';

const Assignments3 = () => {
    const breadcumbData = [
        {
            id: 1,
            url: URL_ASSIGNMENTS_3,
            label: 'Assignments3',
        },
    ];

    return (
        <>
            <Breadcrumb data={breadcumbData} />
            <Assignments3Container />
        </>
    );
};

export default Assignments3;
