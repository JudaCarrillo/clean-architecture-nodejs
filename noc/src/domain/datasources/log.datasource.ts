import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// Business Logic
export abstract class LogDataSource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
