// import { InMemoryUserRepository } from "./repository";
// import { IUserRepository } from "./repository-interface";
// import { UserApplicationService, UserService } from "./service";
import * as fs from 'fs';

// class ServiceCollection {
//     constructor() {};
//     buildServiceProvider(): ServiceProvider {
//         return new ServiceProvider;
//     };
//     addSingleton<T, U>() {};
//     addTransient<T>() {};
// }

// class ServiceProvider {

// }

// class Program
// {
//     private static serviceProvider = new ServiceProvider;
//     static main(args: string): void {
//         Program.startUp();
//     }

//     static startUp(): void
//     {
//         // IoC Container
//         const serviceCollection = new ServiceCollection();
//         // IUserRepositoryが要求されたらInMemoryUserRepositoryを生成して引き渡す（生成したインスタンスはその後使いまわされる）
//         serviceCollection.addSingleton<IUserRepository, InMemoryUserRepository >();
//         // UserServiceが要求されたら都度UserServiceを生成して引き渡す
//         serviceCollection.addTransient<UserService>();
//         // UserApplicationServiceが要求されたら都度UserApplicationServiceを生成して引き渡す
//         serviceCollection.addTransient<UserApplicationService>();
//         // 依存解決を行うプロバイダの生成
//         // プログラムはserviceProviderに依存の解決を依頼する
//         // serviceProvider = serviceCollection.buildServiceProvider();
//     }
// }
// var serviceProvider: ServiceProvider;

// Program.main('');
const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");
console.log('azzzz');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
import * as readline from 'readline';
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
