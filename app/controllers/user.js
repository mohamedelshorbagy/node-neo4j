import { services as userService } from '../services/user';


const { all } = userService;

export const ctrls = {
    all(req, res, next) {
        const { name = "Shorbagy" } = req.params;
        return all(name)
            .then(response => {

                let { records } = response;

                records = records.map((record) => ({ user: { ...record._fields[0].properties }, relationship: record._fields[1].type }))

                return res.status(200).json({
                    success: true,
                    data: records
                })

            })
            .catch(err => {
                console.log(err);
                return res.status(200).json({
                    success: true,
                    message: 'Something went wrong!'
                })

            })
    }
}



