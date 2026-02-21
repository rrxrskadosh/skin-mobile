(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"start":"this.init()","id":"rootPlayer","class":"Player","data":{"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"rate":1,"speechOnInfoWindow":false,"speechOnTooltip":false},"defaultLocale":"en","history":{},"name":"Player568","locales":{"en":"locale/en.txt"}},"backgroundColor":["#FFFFFF"],"left":447.5,"minWidth":0,"scrollBarColor":"#000000","minHeight":0,"hash": "97287f6ee509d4e8e29278e71f92dc92ecc89f065768e1f209a36a20378b2ff7", "definitions": [{"data":{"label":"Mapa M\u00e9xico"},"thumbnailUrl":"media/album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C_t.png","label":trans('album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C.label'),"id":"album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C","playList":"this.album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C_AlbumPlayList","class":"PhotoAlbum"},{"id":"ImageResource_6402B78E_731C_73B7_41CC_D30EB339B51D","class":"ImageResource","levels":["this.imlevel_65D0F3EA_731C_737F_41B0_2C48E6936754"]},{"id":"FadeInEffect_7CE8F755_6DA1_D676_41CC_D2D4CE4EA423","easing":"cubic_in_out","class":"FadeInEffect"},{"pitch":0.23,"showDuration":500,"yaw":41.37,"showEasing":"cubic_in","popupMaxHeight":"95%","hfov":0.23,"popupMaxWidth":"95%","hideDuration":500,"hideEasing":"cubic_out","id":"popup_643DE01D_7364_ECD5_41D4_1309DC20C98E","image":"this.ImageResource_6B53F625_737C_D4EA_41C8_6DB4C643F394","class":"PopupPanoramaOverlay","popupDistance":100},{"id":"mainPlayList","items":[{"media":"this.album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F","start":"this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000')","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PhotoAlbumPlayListItem","player":"this.MainViewerPhotoAlbumPlayer"},{"media":"this.album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C","start":"this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000')","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PhotoAlbumPlayListItem","player":"this.MainViewerPhotoAlbumPlayer"},{"camera":"this.panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_camera","media":"this.panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"data":{"label":"mapa-mexico-vertical"},"duration":3000,"thumbnailUrl":"media/photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C_t.webp","class":"Photo","height":1935,"label":trans('photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C.label'),"id":"photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C","image":{"class":"ImageResource","levels":[{"url":"media/photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C.webp","class":"ImageResourceLevel"}]},"width":1069},{"thumbnailUrl":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_t.webp","overlays":["this.overlay_66C83AEA_732C_7D72_41CC_0FE1F8A3D852","this.overlay_64E441AB_732C_6FFD_41BC_5E4FAAB242A0","this.overlay_64946ED4_732B_D5AA_41D2_474ACA15A70C","this.popup_6467B73F_7324_F4D5_41B2_965BFE9F5F29","this.popup_6B3932F4_731D_AD6B_41DA_FABF10A8B41D","this.popup_648B99FD_731C_FF55_41B6_117006D1CB09","this.overlay_6B5D22B3_7365_ADEE_41C0_3E5775210A29","this.popup_643DE01D_7364_ECD5_41D4_1309DC20C98E"],"hfov":90,"vfov":1.58,"hfovMax":90,"id":"panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356","class":"Panorama","partial":true,"hfovMin":"150%","data":{"label":"canc\u00fan-points"},"frames":[{"thumbnailUrl":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2048,"url":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_0/{face}/0/{row}_{column}.webp","width":12288,"tags":"ondemand","colCount":24,"class":"TiledImageResourceLevel","rowCount":4},{"height":1024,"url":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_0/{face}/1/{row}_{column}.webp","width":6144,"tags":"ondemand","colCount":12,"class":"TiledImageResourceLevel","rowCount":2},{"height":512,"url":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_0/{face}/2/{row}_{column}.webp","width":3072,"tags":["ondemand","preload"],"colCount":6,"class":"TiledImageResourceLevel","rowCount":1}]}}],"label":trans('panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356.label')},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":-43.86},"enterPointingToHorizon":true,"id":"panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_camera","class":"PanoramaCamera"},{"id":"ImageResource_6403178E_731C_73B7_41DC_38BF16B57DC3","class":"ImageResource","levels":["this.imlevel_65D103D9_731C_735D_41B4_0B53D3A79F5E"]},{"id":"FadeOutEffect_7CE8E754_6DA1_D676_41CE_3F7E62430F97","easing":"cubic_in_out","class":"FadeOutEffect"},{"data":{"label":"Mapa Mundi"},"thumbnailUrl":"media/album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F_t.png","label":trans('album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F.label'),"id":"album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F","playList":"this.album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F_AlbumPlayList","class":"PhotoAlbum"},{"pitch":0.36,"showDuration":500,"yaw":0.01,"showEasing":"cubic_in","popupMaxHeight":"95%","hfov":0.23,"popupMaxWidth":"95%","hideDuration":500,"hideEasing":"cubic_out","id":"popup_6B3932F4_731D_AD6B_41DA_FABF10A8B41D","image":"this.ImageResource_6403178E_731C_73B7_41DC_38BF16B57DC3","class":"PopupPanoramaOverlay","popupDistance":100},{"id":"ImageResource_643E478A_731C_73BF_41D4_251B0D0AE2D3","class":"ImageResource","levels":["this.imlevel_65D183C8_731C_73BA_41C1_099A4FB7C67D"]},{"id":"ImageResource_6B53F625_737C_D4EA_41C8_6DB4C643F394","class":"ImageResource","levels":["this.imlevel_6B7FD2FF_737C_ED55_41C2_962E168D4B9C"]},{"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","toolTipBorderColor":"#767676","toolTipPaddingLeft":6,"vrPointerColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","subtitlesGap":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowOpacity":1,"toolTipBackgroundColor":"#F6F6F6","data":{"name":"Main Viewer"},"playbackBarHeadBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesTop":0,"playbackBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","toolTipPaddingTop":4,"progressBackgroundColorRatios":[0],"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"progressOpacity":0.7,"vrThumbstickRotationStep":20,"playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","progressRight":"33%","playbackBarLeft":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesTextShadowVerticalLength":1,"toolTipFontColor":"#606060","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"toolTipPaddingBottom":4,"subtitlesBottom":50,"toolTipFontFamily":"Arial","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontSize":"1.11vmin","id":"MainViewer","progressBackgroundColor":["#000000"],"class":"ViewerArea","progressBottom":10,"minHeight":50,"playbackBarBottom":5,"minWidth":100,"progressHeight":2,"progressBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderRadius":2,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"playbackBarRight":0,"progressBarBorderSize":0,"playbackBarHeight":10,"vrPointerSelectionTime":2000,"progressBorderRadius":2,"width":"100%","progressLeft":"33%","playbackBarHeadWidth":6,"toolTipTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"toolTipShadowColor":"#333138","playbackBarProgressBackgroundColorRatios":[0],"height":"100%","propagateClick":false,"playbackBarBorderColor":"#FFFFFF"},{"pitch":0.37,"showDuration":500,"yaw":-22.5,"showEasing":"cubic_in","popupMaxHeight":"95%","hfov":0.23,"popupMaxWidth":"95%","hideDuration":500,"hideEasing":"cubic_out","id":"popup_6467B73F_7324_F4D5_41B2_965BFE9F5F29","image":"this.ImageResource_643E478A_731C_73BF_41D4_251B0D0AE2D3","class":"PopupPanoramaOverlay","popupDistance":100},{"pitch":0.33,"showDuration":500,"yaw":22.5,"showEasing":"cubic_in","popupMaxHeight":"95%","hfov":0.23,"popupMaxWidth":"95%","hideDuration":500,"hideEasing":"cubic_out","id":"popup_648B99FD_731C_FF55_41B6_117006D1CB09","image":"this.ImageResource_6402B78E_731C_73B7_41CC_D30EB339B51D","class":"PopupPanoramaOverlay","popupDistance":100},{"data":{"label":"mapa-mundi-vertical"},"duration":3000,"thumbnailUrl":"media/photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A_t.webp","class":"Photo","height":1927,"label":trans('photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A.label'),"id":"photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A","image":{"class":"ImageResource","levels":[{"url":"media/photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A.webp","class":"ImageResourceLevel"}]},"width":1079},{"id":"MainViewerPhotoAlbumPlayer","viewerArea":"this.MainViewer","class":"PhotoAlbumPlayer"},{"class":"PanoramaPlayer","touchControlMode":"drag_rotation","aaEnabled":true,"displayPlaybackBar":true,"arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation"},{"id":"veilPopupPanorama","class":"UIComponent","left":0,"backgroundColor":["#000000"],"data":{"name":"UIComponent3361"},"right":0,"minWidth":0,"minHeight":0,"backgroundOpacity":0.55,"top":0,"bottom":0,"showEffect":{"duration":350,"easing":"cubic_in_out","class":"FadeInEffect"},"backgroundColorRatios":[0],"visible":false,"propagateClick":false},{"id":"zoomImagePopupPanorama","class":"ZoomImage","left":0,"backgroundColor":[],"data":{"name":"ZoomImage3362"},"right":0,"minWidth":0,"minHeight":0,"top":0,"bottom":0,"backgroundColorRatios":[],"visible":false,"scaleMode":"custom","propagateClick":false},{"layout":"horizontal","id":"closeButtonPopupPanorama","class":"CloseButton","data":{"name":"CloseButton3363"},"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"fontSize":"1.29vmin","minHeight":0,"right":10,"minWidth":0,"fontFamily":"Arial","tabIndex":0,"iconColor":"#000000","pressedIconColor":"#888888","iconWidth":"100%","top":10,"showEffect":{"duration":350,"easing":"cubic_in_out","class":"FadeInEffect"},"iconLineWidth":2,"backgroundColorRatios":[0,0.09803921568627451,1],"rollOverIconColor":"#666666","borderColor":"#000000","iconHeight":"100%","visible":false,"fontColor":"#FFFFFF","propagateClick":false},{"id":"album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C_AlbumPlayList","items":[{"camera":{"initialPosition":{"y":0.63,"x":0.62,"class":"PhotoCameraPosition","zoomFactor":1.1},"duration":3000,"scaleMode":"fit_outside","class":"MovementPhotoCamera","targetPosition":{"class":"PhotoCameraPosition"}},"media":"this.photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C","class":"PhotoPlayListItem"}],"class":"PhotoPlayList"},{"height":512,"url":trans('imlevel_65D0F3EA_731C_737F_41B0_2C48E6936754.url'),"width":512,"id":"imlevel_65D0F3EA_731C_737F_41B0_2C48E6936754","class":"ImageResourceLevel"},{"enabledInCardboard":true,"maps":[],"enabled":false,"items":[{"pitch":0.37,"yaw":-22.5,"data":{"label":"Restaurante Tai Canc\u00fan"},"distance":50,"hfov":0.23,"scaleMode":"fit_inside","vfov":0.23,"image":"this.res_65C5FE9C_731C_55DB_41BC_B054578C5F04","class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Restaurante Tai Cancún"},"areas":["this.HotspotPanoramaOverlayArea_66DC5C2E_732C_74F7_41CC_39ED8643449A"],"id":"overlay_66C83AEA_732C_7D72_41CC_0FE1F8A3D852","class":"HotspotPanoramaOverlay","useHandCursor":true},{"enabledInCardboard":true,"maps":[],"enabled":false,"items":[{"pitch":0.36,"yaw":0.01,"data":{"label":"Hotel Presidente Intercontinental Canc\u00fan 1"},"distance":50,"scaleMode":"fit_inside","vfov":0.23,"hfov":0.23,"image":"this.res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C","class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Hotel Presidente Intercontinental Cancún 1"},"areas":["this.HotspotPanoramaOverlayArea_6B1271C9_732C_6FBA_41B6_5DCC782BDC09"],"id":"overlay_64E441AB_732C_6FFD_41BC_5E4FAAB242A0","class":"HotspotPanoramaOverlay","useHandCursor":true},{"enabledInCardboard":true,"maps":[],"enabled":false,"items":[{"pitch":0.33,"yaw":22.5,"data":{"label":"Restaurante Parole Canc\u00fan"},"distance":50,"scaleMode":"fit_inside","vfov":0.23,"hfov":0.23,"image":"this.res_65C5FE9C_731C_55DB_41BC_B054578C5F04","class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Restaurante Parole Cancún"},"areas":["this.HotspotPanoramaOverlayArea_64970EDF_732B_D555_41C2_8F7F756CC146"],"id":"overlay_64946ED4_732B_D5AA_41D2_474ACA15A70C","class":"HotspotPanoramaOverlay","useHandCursor":true},{"enabledInCardboard":true,"maps":[],"enabled":false,"items":[{"pitch":0.23,"yaw":41.37,"data":{"label":"Hotel Hawen Riviera Canc\u00fan"},"distance":50,"scaleMode":"fit_inside","vfov":0.23,"hfov":0.23,"image":"this.res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C","class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Hotel Hawen Riviera Cancún"},"areas":["this.HotspotPanoramaOverlayArea_6B5E72BE_7365_ADD7_41BC_35E8109E89BA"],"id":"overlay_6B5D22B3_7365_ADEE_41C0_3E5775210A29","class":"HotspotPanoramaOverlay","useHandCursor":true},{"height":415,"url":trans('imlevel_65D103D9_731C_735D_41B4_0B53D3A79F5E.url'),"width":512,"id":"imlevel_65D103D9_731C_735D_41B4_0B53D3A79F5E","class":"ImageResourceLevel"},{"id":"album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F_AlbumPlayList","items":[{"camera":{"initialPosition":{"y":0.34,"x":0.61,"class":"PhotoCameraPosition","zoomFactor":1.1},"duration":3000,"scaleMode":"fit_outside","class":"MovementPhotoCamera","targetPosition":{"class":"PhotoCameraPosition"}},"media":"this.photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A","class":"PhotoPlayListItem"}],"class":"PhotoPlayList"},{"height":512,"url":trans('imlevel_65D183C8_731C_73BA_41C1_099A4FB7C67D.url'),"width":512,"id":"imlevel_65D183C8_731C_73BA_41C1_099A4FB7C67D","class":"ImageResourceLevel"},{"height":384,"url":trans('imlevel_6B7FD2FF_737C_ED55_41C2_962E168D4B9C.url'),"width":512,"id":"imlevel_6B7FD2FF_737C_ED55_41C2_962E168D4B9C","class":"ImageResourceLevel"},{"id":"res_65C5FE9C_731C_55DB_41BC_B054578C5F04","class":"ImageResource","levels":[{"height":10,"url":"media/res_65C5FE9C_731C_55DB_41BC_B054578C5F04_0.webp","width":10,"class":"ImageResourceLevel"}]},{"mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_66DC5C2E_732C_74F7_41CC_39ED8643449A","click":"this.showPopupPanoramaOverlay(this.popup_6467B73F_7324_F4D5_41B2_965BFE9F5F29,{'rollOverBorderColor':'#000000','backgroundColorDirection':'vertical','backgroundOpacity':1,'rollOverIconHeight':20,'iconWidth':20,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedIconHeight':20,'borderRadius':0,'paddingBottom':5,'pressedIconWidth':20,'rollOverBackgroundOpacity':1,'iconLineWidth':2,'paddingLeft':5,'borderSize':0,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':2,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconHeight':20,'borderColor':'#000000','pressedIconLineWidth':2,'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':1,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0},this.ImageResource_643E478A_731C_73BF_41D4_251B0D0AE2D3,null,null,null,false)","class":"HotspotPanoramaOverlayArea"},{"id":"res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C","class":"ImageResource","levels":[{"height":10,"url":"media/res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C_0.webp","width":10,"class":"ImageResourceLevel"}]},{"mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_6B1271C9_732C_6FBA_41B6_5DCC782BDC09","click":"this.showPopupPanoramaOverlay(this.popup_6B3932F4_731D_AD6B_41DA_FABF10A8B41D,{'rollOverBorderColor':'#000000','backgroundColorDirection':'vertical','backgroundOpacity':1,'rollOverIconHeight':20,'iconWidth':20,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedIconHeight':20,'borderRadius':0,'paddingBottom':5,'pressedIconWidth':20,'rollOverBackgroundOpacity':1,'iconLineWidth':2,'paddingLeft':5,'borderSize':0,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':2,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconHeight':20,'borderColor':'#000000','pressedIconLineWidth':2,'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':1,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0},this.ImageResource_6403178E_731C_73B7_41DC_38BF16B57DC3,null,null,null,false)","class":"HotspotPanoramaOverlayArea"},{"mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_64970EDF_732B_D555_41C2_8F7F756CC146","click":"this.showPopupPanoramaOverlay(this.popup_648B99FD_731C_FF55_41B6_117006D1CB09,{'rollOverBorderColor':'#000000','backgroundColorDirection':'vertical','backgroundOpacity':1,'rollOverIconHeight':20,'iconWidth':20,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedIconHeight':20,'borderRadius':0,'paddingBottom':5,'pressedIconWidth':20,'rollOverBackgroundOpacity':1,'iconLineWidth':2,'paddingLeft':5,'borderSize':0,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':2,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconHeight':20,'borderColor':'#000000','pressedIconLineWidth':2,'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':1,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0},this.ImageResource_6402B78E_731C_73B7_41CC_D30EB339B51D,null,null,null,false)","class":"HotspotPanoramaOverlayArea"},{"mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_6B5E72BE_7365_ADD7_41BC_35E8109E89BA","click":"this.showPopupPanoramaOverlay(this.popup_643DE01D_7364_ECD5_41D4_1309DC20C98E,{'rollOverBorderColor':'#000000','backgroundColorDirection':'vertical','backgroundOpacity':1,'rollOverIconHeight':20,'iconWidth':20,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedIconHeight':20,'borderRadius':0,'paddingBottom':5,'pressedIconWidth':20,'rollOverBackgroundOpacity':1,'iconLineWidth':2,'paddingLeft':5,'borderSize':0,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':2,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconHeight':20,'borderColor':'#000000','pressedIconLineWidth':2,'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':1,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0},this.ImageResource_6B53F625_737C_D4EA_41C8_6DB4C643F394,null,null,null,false)","class":"HotspotPanoramaOverlayArea"}],"scripts":{"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"executeJS":TDV.Tour.Script.executeJS,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"isPanorama":TDV.Tour.Script.isPanorama,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"clone":TDV.Tour.Script.clone,"mixObject":TDV.Tour.Script.mixObject,"setLocale":TDV.Tour.Script.setLocale,"getOverlays":TDV.Tour.Script.getOverlays,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"openLink":TDV.Tour.Script.openLink,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showWindow":TDV.Tour.Script.showWindow,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPixels":TDV.Tour.Script.getPixels,"quizFinish":TDV.Tour.Script.quizFinish,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaByName":TDV.Tour.Script.getMediaByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"enableVR":TDV.Tour.Script.enableVR,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"init":TDV.Tour.Script.init,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleVR":TDV.Tour.Script.toggleVR,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"disableVR":TDV.Tour.Script.disableVR,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"createTween":TDV.Tour.Script.createTween,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMapLocation":TDV.Tour.Script.setMapLocation,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"playAudioList":TDV.Tour.Script.playAudioList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"startMeasurement":TDV.Tour.Script.startMeasurement,"shareSocial":TDV.Tour.Script.shareSocial,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"translate":TDV.Tour.Script.translate,"getKey":TDV.Tour.Script.getKey,"setValue":TDV.Tour.Script.setValue,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"existsKey":TDV.Tour.Script.existsKey,"quizStart":TDV.Tour.Script.quizStart,"registerKey":TDV.Tour.Script.registerKey,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer},"defaultMenu":["fullscreen","mute","rotation"],"scrollBarMargin":2,"width":"100%","backgroundColorRatios":[0],"height":"100%","layout":"absolute","gap":10,"children":["this.MainViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"propagateClick":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.2.10, Fri Feb 20 2026