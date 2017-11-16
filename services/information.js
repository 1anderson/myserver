'use strict';

const accountStatus = {
    ACTIVE: '',
    PENDING: ''
};

function loadAccountStatus(models){
    models.User_account_status.findAll().
    then((result)=>{
        for(let i=0;i<result.length;i++){
            switch (result[i].name){
                case 'ACTIVE':
                    accountStatus.ACTIVE = result[i].user_account_status_id;
                    break;
                case 'PENDING':
                     accountStatus.PENDING = result[i].user_account_status_id;
            };
        };
    });
};





// user_account_status_id | code | name    |
// +------------------------+------+---------+
// |                      1 | 200  | ACTIVE  |
// |                      2 | 401  | PENDING 

export {
    loadAccountStatus,
    accountStatus
}


