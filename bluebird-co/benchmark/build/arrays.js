'use strict';

var _bluebird = require( 'bluebird' );

var _bluebird2 = _interopRequireDefault( _bluebird );

var _ = require( '../../' );

var _2 = _interopRequireDefault( _ );

var _co = require( '../co' );

var _co2 = require( 'co' );

function _interopRequireDefault( obj ) {
    return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Created by Aaron on 7/11/2015.
 */

function makeArray( length ) {
    var res = new Array( length );
    var i = -1;

    while( ++i < length ) {
        res[i] = _bluebird2.default.resolve( i );
    }

    return res;
}

suite( 'very short arrays (2 elements)', function() {
    set( 'delay', 0 );
    set( 'mintime', 1750 );

    var co_version = (0, _co2.wrap)( function* () {
        return yield makeArray( 2 );
    } );

    var cob_version = (0, _co.wrap)( function* () {
        return yield makeArray( 2 );
    } );

    var bluebird_version = function() {
        var ref = (0, _bluebird.coroutine)( function* () {
            return yield makeArray( 2 );
        } );
        return function bluebird_version() {
            return ref.apply( this, arguments );
        };
    }();

    bench( 'co', function( next ) {
        co_version().then( next, console.error );
    } );

    bench( 'co with bluebird promises', function( next ) {
        cob_version().then( next, console.error );
    } );

    bench( 'bluebird-co', function( next ) {
        bluebird_version().then( next, console.error );
    } );
} );

suite( 'short arrays (10 elements)', function() {
    set( 'delay', 0 );
    set( 'mintime', 1750 );

    var co_version = (0, _co2.wrap)( function* () {
        return yield makeArray( 10 );
    } );

    var cob_version = (0, _co.wrap)( function* () {
        return yield makeArray( 10 );
    } );

    var bluebird_version = function() {
        var ref = (0, _bluebird.coroutine)( function* () {
            return yield makeArray( 10 );
        } );
        return function bluebird_version() {
            return ref.apply( this, arguments );
        };
    }();

    bench( 'co', function( next ) {
        co_version().then( next, console.error );
    } );

    bench( 'co with bluebird promises', function( next ) {
        cob_version().then( next, console.error );
    } );

    bench( 'bluebird-co', function( next ) {
        bluebird_version().then( next, console.error );
    } );
} );

suite( 'long arrays (2000 elements)', function() {
    set( 'delay', 0 );
    set( 'mintime', 1750 );

    var co_version = (0, _co2.wrap)( function* () {
        return yield makeArray( 2000 );
    } );

    var cob_version = (0, _co.wrap)( function* () {
        return yield makeArray( 2000 );
    } );

    var bluebird_version = function() {
        var ref = (0, _bluebird.coroutine)( function* () {
            return yield makeArray( 2000 );
        } );
        return function bluebird_version() {
            return ref.apply( this, arguments );
        };
    }();

    bench( 'co', function( next ) {
        co_version().then( next, console.error );
    } );

    bench( 'co with bluebird promises', function( next ) {
        cob_version().then( next, console.error );
    } );

    bench( 'bluebird-co', function( next ) {
        bluebird_version().then( next, console.error );
    } );
} );

suite( 'huge arrays (10000 elements)', function() {
    set( 'delay', 0 );
    set( 'mintime', 1750 );

    var co_version = (0, _co2.wrap)( function* () {
        return yield makeArray( 10000 );
    } );

    var cob_version = (0, _co.wrap)( function* () {
        return yield makeArray( 10000 );
    } );

    var bluebird_version = function() {
        var ref = (0, _bluebird.coroutine)( function* () {
            return yield makeArray( 10000 );
        } );
        return function bluebird_version() {
            return ref.apply( this, arguments );
        };
    }();

    bench( 'co', function( next ) {
        co_version().then( next, console.error );
    } );

    bench( 'co with bluebird promises', function( next ) {
        cob_version().then( next, console.error );
    } );

    bench( 'bluebird-co', function( next ) {
        bluebird_version().then( next, console.error );
    } );
} );
