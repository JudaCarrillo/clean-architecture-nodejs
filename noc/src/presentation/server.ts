import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepository } from "../infrastructure/repositories/log.repository";
import { CronService } from "./cron/cron.service";
import { EmailService } from "./email.service";

const fileSystemLogRepository = new LogRepository(new FileSystemDataSource());
const emailService = new EmailService();

export class Server {
  public static start() {
    console.log("Server started...");

    // CronService.createJob("*/5 * * * * *", () => {
    //   const url = "https://www.google.com";
    //   // const url = "http://localhost:3000";

    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log(`${url} is ok`),
    //     (error) => console.log(error)
    //   ).execute(url);
    //   // new CheckService().execute("http://localhost:3000")
    // });

    new SendEmailLogs(
      emailService,
      fileSystemLogRepository
    ).execute([
      "judacarrillo.dev@gmail.com",
      "judacarrillopacherres@gmail.com",
    ]);
  
  }
}
