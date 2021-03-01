import {Injectable} from '@angular/core'
import { BehaviorSubject, interval, Observable } from 'rxjs'
import {take, tap, map} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
}) 
export class UploadService {

    uploadHistory: string[] = []
    historySubject = new BehaviorSubject<string[]>(this.uploadHistory)

    uploadFile(path: string): Observable<string> {
        return interval(5000).pipe(
            take(1),
            map(tick => path),
            tap(() => {
                this.uploadHistory.push(path)
                this.notify()
            }),
        )
    }

    clearHistory(): void {
        this.uploadHistory = []
        this.notify()
    }

    private notify(): void {
        this.historySubject.next(this.uploadHistory.slice())
    }
}