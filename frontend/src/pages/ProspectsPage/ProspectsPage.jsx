import React from 'react'
import {Header} from '../../core/components'
import {student} from '../../shared/img'

export const ProspectsPage = React.memo(() => {
    return (
        <div>
            <Header title={'ПРОФИЛЬ'} background={'purple'} icon={student} isSettings/>
            Профиль
        </div>
    )
})

