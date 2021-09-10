import {v4 as uuidv4} from "uuid";

export type EdgeData = {
    timestamp: string;
    enterpriseId: string,
    siteId: string,
    areaId: string,
    machineId: string,
    engineRpm: number,
    engineTemperature: number,
    carrierDistanceRan: number,
    output: number,
    powerVoltage: number,
    engineVoltage: number,
    carrierVoltage: number,
    outsideTemperature: number,
    input: number,
    humidity: number,
}

/**
 * returns 1000 data points per enterprise
 * @param nbr of enterprises ( = nbr thousands data points);
 * return EdgeData[nbr*1000]
 */
export function createEnterpriseData(nbr: number): EdgeData[] {
    const data = [];
    for(let n = 0; n < nbr; n++){
        const enterpriseId = uuidv4();
        for(let i = 0; i < 10; i++){
            const siteId = uuidv4();
            for(let j = 0; j < 10; j++){
                const areaId = uuidv4();
                for(let k = 0; k < 10; k++){
                    data.push({
                        timestamp: (process.hrtime.bigint() / 1000n).toString(),
                        enterpriseId,
                        siteId,
                        areaId,
                        machineId: uuidv4(),
                        engineRpm: Math.floor(Math.random() * 5000 + 10000),
                        engineTemperature: Math.floor(Math.random() * 4000 + 3000) / 100,
                        carrierDistanceRan: Math.floor(Math.random() * 5000),
                        output: Math.floor(Math.random() * 10),
                        powerVoltage: Math.floor(Math.random() * 10000 + 15000) / 100,
                        engineVoltage: Math.floor(Math.random() * 10000 + 15000) / 100,
                        carrierVoltage: Math.floor(Math.random() * 10000 + 15000) / 100,
                        outsideTemperature: Math.floor(Math.random() * 1000 + 2000) / 100,
                        input: Math.floor(Math.random() * 20),
                        humidity: Math.floor(Math.random() * 1000 + 4000) / 100,
                    });
                }
            }
        }
    }
    return data;
}
