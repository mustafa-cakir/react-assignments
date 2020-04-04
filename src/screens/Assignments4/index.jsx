import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import Assignments4Container from '../../components/Assignments4';
import { URL_ASSIGNMENTS_4 } from '../../core/routes/constants';

const Assignments4 = () => {
    const breadcumbData = [
        {
            id: 1,
            url: URL_ASSIGNMENTS_4,
            label: 'Assignments4',
        },
    ];

    return (
        <>
            <Breadcrumb data={breadcumbData} />
            <Assignments4Container />
        </>
    );
};

export default Assignments4;
