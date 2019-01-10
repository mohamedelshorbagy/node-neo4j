import { services as foodService } from '../services/social';


const { all } = foodService;

export const ctrls = {
    all(req, res, next) {
        const { name = "Facebook" } = req.params;
        return all(name)
            .then(response => {
                let records = response['records'];

                records = records.map((record) => ({ user: record._fields[0].properties, type: record._fields[0].labels.join(',') }));

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



