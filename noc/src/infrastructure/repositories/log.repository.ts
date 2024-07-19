import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogSeverityLevel, LogEntity } from "../../domain/entities/log.entity";
import { LogRepository as LogRepositoryAbstract } from "../../domain/repository/log.repository";

export class LogRepository implements LogRepositoryAbstract {

    constructor(
        private readonly logDataSource: LogDataSource
    ) {}

    async saveLog(log: LogEntity): Promise<void> {
        return this.logDataSource.saveLog(log);
    }
    
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDataSource.getLogs(severityLevel);
    }

}