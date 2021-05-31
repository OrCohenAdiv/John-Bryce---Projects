import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rgb } from '../models/types';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private red: number = 255;
    private green: number = 255;
    private blue: number = 255;
    private curColor: Rgb = [255, 255, 255];

    private red$ = new BehaviorSubject(255);
    private green$ = new BehaviorSubject(255);
    private blue$ = new BehaviorSubject(255);
    private curColor$ = new BehaviorSubject<Rgb>([255, 255, 255]);

    constructor() { }

    getRed(): Observable<number> {
        return this.red$.asObservable();
    }

    getGreen(): Observable<number> {
        return this.green$.asObservable();
    }
    getBlue(): Observable<number> {
        return this.blue$.asObservable();
    }

    getComputerColor(): Observable<Rgb> {
        return this.curColor$.asObservable();
    }

    setRed(value: number) {
        this.red = value;
        this.red$.next(this.red);
    }

    setGreen(value: number) {
        this.green = value;
        this.green$.next(this.green);
    }

    setBlue(value: number) {
        this.blue = value;
        this.blue$.next(this.blue);
    }

    private rndByte(): number {
        return Math.floor(Math.random() * 256);
    }

    randomizeColor() {
        let rndColor: Rgb = [this.rndByte(), this.rndByte(), this.rndByte()];
        this.curColor = rndColor;
        this.curColor$.next(this.curColor);
    }


}
