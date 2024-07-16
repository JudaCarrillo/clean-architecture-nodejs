import { LogEntity, LogSeverityLevel } from "../entities/log.entity";


// This is a means of communication between the application and the data source
export abstract class LogRepository {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
