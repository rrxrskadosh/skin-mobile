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
var script = {"class":"Player","id":"rootPlayer","data":{"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"rate":1,"speechOnInfoWindow":false,"speechOnTooltip":false},"defaultLocale":"en","history":{},"name":"Player568","locales":{"en":"locale/en.txt"}},"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"start":"this.init()","scrollBarMargin":2,"hash": "d20537ed0af33f34944a4c79cd4fec152389e4b0ad1bf8fd31148b43deb50b16", "definitions": [{"id":"FadeOutEffect_7CE8E754_6DA1_D676_41CE_3F7E62430F97","class":"FadeOutEffect","easing":"cubic_in_out"},{"id":"MainViewerPhotoAlbumPlayer","class":"PhotoAlbumPlayer","viewerArea":"this.MainViewer"},{"height":1935,"duration":3000,"data":{"label":"mapa-mexico-vertical"},"class":"Photo","label":trans('photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C.label'),"id":"photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C","image":{"levels":[{"class":"ImageResourceLevel","url":"media/photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C.webp"}],"class":"ImageResource"},"width":1069,"thumbnailUrl":"media/photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C_t.webp"},{"id":"album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F","thumbnailUrl":"media/album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F_t.png","class":"PhotoAlbum","playList":"this.album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F_AlbumPlayList","label":trans('album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F.label'),"data":{"label":"Mapa Mundi"}},{"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"toolTipBorderColor":"#767676","toolTipPaddingLeft":6,"vrPointerColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","playbackBarBackgroundOpacity":1,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","data":{"name":"Main Viewer"},"subtitlesTextShadowOpacity":1,"playbackBarBorderSize":0,"subtitlesGap":0,"subtitlesTop":0,"subtitlesFontColor":"#FFFFFF","toolTipPaddingTop":4,"progressBackgroundColorRatios":[0],"firstTransitionDuration":0,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","surfaceReticleColor":"#FFFFFF","progressRight":"33%","surfaceReticleSelectionColor":"#FFFFFF","progressOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","vrThumbstickRotationStep":20,"playbackBarLeft":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesBackgroundOpacity":0.2,"toolTipFontColor":"#606060","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"subtitlesTextShadowVerticalLength":1,"toolTipPaddingBottom":4,"subtitlesBottom":50,"toolTipFontFamily":"Arial","class":"ViewerArea","progressBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontSize":"1.11vmin","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"subtitlesTextShadowHorizontalLength":1,"id":"MainViewer","progressBottom":10,"minHeight":50,"playbackBarBottom":5,"progressHeight":2,"minWidth":100,"progressBarBorderRadius":2,"progressBorderSize":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderSize":0,"playbackBarHeight":10,"vrPointerSelectionTime":2000,"width":"100%","progressLeft":"33%","playbackBarHeadWidth":6,"toolTipTextShadowColor":"#000000","progressBorderRadius":2,"toolTipPaddingRight":6,"height":"100%","toolTipShadowColor":"#333138","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"propagateClick":false,"playbackBarBorderColor":"#FFFFFF"},{"id":"ImageResource_6402B78E_731C_73B7_41CC_D30EB339B51D","class":"ImageResource","levels":["this.imlevel_65D0F3EA_731C_737F_41B0_2C48E6936754"]},{"viewerArea":"this.MainViewer","aaEnabled":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer"},{"id":"album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C","thumbnailUrl":"media/album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C_t.png","class":"PhotoAlbum","playList":"this.album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C_AlbumPlayList","label":trans('album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C.label'),"data":{"label":"Mapa M\u00e9xico"}},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PhotoAlbumPlayListItem","media":"this.album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPhotoAlbumPlayer"},{"class":"PhotoAlbumPlayListItem","media":"this.album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPhotoAlbumPlayer"},{"camera":"this.panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_camera","media":"this.panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}]},{"pitch":0.37,"hfov":0.23,"yaw":-22.5,"id":"popup_6467B73F_7324_F4D5_41B2_965BFE9F5F29","popupMaxWidth":"95%","popupDistance":100,"showDuration":500,"class":"PopupPanoramaOverlay","showEasing":"cubic_in","hideEasing":"cubic_out","popupMaxHeight":"95%","image":"this.ImageResource_643E478A_731C_73BF_41D4_251B0D0AE2D3","hideDuration":500},{"hfov":90,"partial":true,"vfov":1.58,"class":"Panorama","hfovMin":"150%","hfovMax":90,"id":"panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356","data":{"label":"canc\u00fan-points"},"label":trans('panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"url":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_0/{face}/0/{row}_{column}.webp","tags":"ondemand","class":"TiledImageResourceLevel","height":2048,"width":12288,"colCount":24,"rowCount":4},{"url":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_0/{face}/1/{row}_{column}.webp","tags":"ondemand","class":"TiledImageResourceLevel","height":1024,"width":6144,"colCount":12,"rowCount":2},{"url":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","height":512,"width":3072,"colCount":6,"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_t.webp"}],"overlays":["this.overlay_66C83AEA_732C_7D72_41CC_0FE1F8A3D852","this.overlay_64E441AB_732C_6FFD_41BC_5E4FAAB242A0","this.overlay_64946ED4_732B_D5AA_41D2_474ACA15A70C","this.popup_6467B73F_7324_F4D5_41B2_965BFE9F5F29","this.popup_6B3932F4_731D_AD6B_41DA_FABF10A8B41D","this.popup_648B99FD_731C_FF55_41B6_117006D1CB09","this.overlay_6B5D22B3_7365_ADEE_41C0_3E5775210A29","this.popup_643DE01D_7364_ECD5_41D4_1309DC20C98E"],"thumbnailUrl":"media/panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_t.webp"},{"pitch":0.23,"hfov":0.23,"yaw":41.37,"id":"popup_643DE01D_7364_ECD5_41D4_1309DC20C98E","popupMaxWidth":"95%","popupDistance":100,"showDuration":500,"class":"PopupPanoramaOverlay","showEasing":"cubic_in","hideEasing":"cubic_out","popupMaxHeight":"95%","image":"this.ImageResource_6B53F625_737C_D4EA_41C8_6DB4C643F394","hideDuration":500},{"id":"ImageResource_6B53F625_737C_D4EA_41C8_6DB4C643F394","class":"ImageResource","levels":["this.imlevel_6B7FD2FF_737C_ED55_41C2_962E168D4B9C"]},{"id":"ImageResource_643E478A_731C_73BF_41D4_251B0D0AE2D3","class":"ImageResource","levels":["this.imlevel_65D183C8_731C_73BA_41C1_099A4FB7C67D"]},{"pitch":0.36,"hfov":0.23,"yaw":0.01,"id":"popup_6B3932F4_731D_AD6B_41DA_FABF10A8B41D","popupMaxWidth":"95%","popupDistance":100,"showDuration":500,"class":"PopupPanoramaOverlay","showEasing":"cubic_in","hideEasing":"cubic_out","popupMaxHeight":"95%","image":"this.ImageResource_6403178E_731C_73B7_41DC_38BF16B57DC3","hideDuration":500},{"pitch":0.33,"hfov":0.23,"yaw":22.5,"id":"popup_648B99FD_731C_FF55_41B6_117006D1CB09","popupMaxWidth":"95%","popupDistance":100,"showDuration":500,"class":"PopupPanoramaOverlay","showEasing":"cubic_in","hideEasing":"cubic_out","popupMaxHeight":"95%","image":"this.ImageResource_6402B78E_731C_73B7_41CC_D30EB339B51D","hideDuration":500},{"id":"FadeInEffect_7CE8F755_6DA1_D676_41CC_D2D4CE4EA423","class":"FadeInEffect","easing":"cubic_in_out"},{"height":1927,"duration":3000,"data":{"label":"mapa-mundi-vertical"},"class":"Photo","label":trans('photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A.label'),"id":"photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A","image":{"levels":[{"class":"ImageResourceLevel","url":"media/photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A.webp"}],"class":"ImageResource"},"width":1079,"thumbnailUrl":"media/photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A_t.webp"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":-43.86},"id":"panorama_64694A9E_733C_5DD7_41D6_F1FCB2758356_camera","class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"ImageResource_6403178E_731C_73B7_41DC_38BF16B57DC3","class":"ImageResource","levels":["this.imlevel_65D103D9_731C_735D_41B4_0B53D3A79F5E"]},{"class":"UIComponent","id":"veilPopupPanorama","left":0,"backgroundColor":["#000000"],"minHeight":0,"data":{"name":"UIComponent1725"},"right":0,"backgroundOpacity":0.55,"minWidth":0,"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":350},"bottom":0,"top":0,"backgroundColorRatios":[0],"visible":false,"propagateClick":false},{"class":"ZoomImage","id":"zoomImagePopupPanorama","left":0,"backgroundColor":[],"minHeight":0,"data":{"name":"ZoomImage1726"},"right":0,"minWidth":0,"bottom":0,"top":0,"backgroundColorRatios":[],"scaleMode":"custom","visible":false,"propagateClick":false},{"iconColor":"#000000","class":"CloseButton","id":"closeButtonPopupPanorama","tabIndex":0,"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"minHeight":0,"data":{"name":"CloseButton1727"},"right":10,"fontFamily":"Arial","iconHeight":"100%","iconWidth":"100%","minWidth":0,"pressedIconColor":"#888888","showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":350},"fontSize":"1.29vmin","iconLineWidth":2,"rollOverIconColor":"#666666","top":10,"backgroundColorRatios":[0,0.09803921568627451,1],"borderColor":"#000000","fontColor":"#FFFFFF","visible":false,"propagateClick":false,"layout":"horizontal"},{"id":"album_608C4D4F_6D5E_3A52_41D0_D0093A70F70F_AlbumPlayList","class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"targetPosition":{"class":"PhotoCameraPosition"},"initialPosition":{"y":0.34,"class":"PhotoCameraPosition","zoomFactor":1.1,"x":0.61},"class":"MovementPhotoCamera","duration":3000,"scaleMode":"fit_outside"},"media":"this.photo_78F6D630_6DDF_C9CE_41A3_3E7AA1A5A97A"}]},{"height":512,"url":trans('imlevel_65D0F3EA_731C_737F_41B0_2C48E6936754.url'),"id":"imlevel_65D0F3EA_731C_737F_41B0_2C48E6936754","class":"ImageResourceLevel","width":512},{"id":"album_63FFE386_6D5F_CED2_41A0_47A58FF3ED8C_AlbumPlayList","class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"targetPosition":{"class":"PhotoCameraPosition"},"initialPosition":{"y":0.63,"class":"PhotoCameraPosition","zoomFactor":1.1,"x":0.62},"class":"MovementPhotoCamera","duration":3000,"scaleMode":"fit_outside"},"media":"this.photo_7BB37E40_6DDE_364E_41D9_F248E0B07D0C"}]},{"id":"overlay_66C83AEA_732C_7D72_41CC_0FE1F8A3D852","items":[{"pitch":0.37,"hfov":0.23,"distance":50,"yaw":-22.5,"vfov":0.23,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Restaurante Tai Canc\u00fan"},"image":"this.res_65C5FE9C_731C_55DB_41BC_B054578C5F04"}],"class":"HotspotPanoramaOverlay","enabled":false,"data":{"label":"Restaurante Tai Cancún"},"maps":[],"areas":["this.HotspotPanoramaOverlayArea_66DC5C2E_732C_74F7_41CC_39ED8643449A"],"enabledInCardboard":true,"useHandCursor":true},{"id":"overlay_64E441AB_732C_6FFD_41BC_5E4FAAB242A0","items":[{"pitch":0.36,"hfov":0.23,"distance":50,"yaw":0.01,"vfov":0.23,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Hotel Presidente Intercontinental Canc\u00fan 1"},"image":"this.res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C"}],"class":"HotspotPanoramaOverlay","enabled":false,"data":{"label":"Hotel Presidente Intercontinental Cancún 1"},"maps":[],"areas":["this.HotspotPanoramaOverlayArea_6B1271C9_732C_6FBA_41B6_5DCC782BDC09"],"enabledInCardboard":true,"useHandCursor":true},{"id":"overlay_64946ED4_732B_D5AA_41D2_474ACA15A70C","items":[{"pitch":0.33,"hfov":0.23,"distance":50,"yaw":22.5,"vfov":0.23,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Restaurante Parole Canc\u00fan"},"image":"this.res_65C5FE9C_731C_55DB_41BC_B054578C5F04"}],"class":"HotspotPanoramaOverlay","enabled":false,"data":{"label":"Restaurante Parole Cancún"},"maps":[],"areas":["this.HotspotPanoramaOverlayArea_64970EDF_732B_D555_41C2_8F7F756CC146"],"enabledInCardboard":true,"useHandCursor":true},{"id":"overlay_6B5D22B3_7365_ADEE_41C0_3E5775210A29","items":[{"pitch":0.23,"hfov":0.23,"distance":50,"yaw":41.37,"vfov":0.23,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Hotel Hawen Riviera Canc\u00fan"},"image":"this.res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C"}],"class":"HotspotPanoramaOverlay","enabled":false,"data":{"label":"Hotel Hawen Riviera Cancún"},"maps":[],"areas":["this.HotspotPanoramaOverlayArea_6B5E72BE_7365_ADD7_41BC_35E8109E89BA"],"enabledInCardboard":true,"useHandCursor":true},{"height":384,"url":trans('imlevel_6B7FD2FF_737C_ED55_41C2_962E168D4B9C.url'),"id":"imlevel_6B7FD2FF_737C_ED55_41C2_962E168D4B9C","class":"ImageResourceLevel","width":512},{"height":512,"url":trans('imlevel_65D183C8_731C_73BA_41C1_099A4FB7C67D.url'),"id":"imlevel_65D183C8_731C_73BA_41C1_099A4FB7C67D","class":"ImageResourceLevel","width":512},{"height":415,"url":trans('imlevel_65D103D9_731C_735D_41B4_0B53D3A79F5E.url'),"id":"imlevel_65D103D9_731C_735D_41B4_0B53D3A79F5E","class":"ImageResourceLevel","width":512},{"id":"res_65C5FE9C_731C_55DB_41BC_B054578C5F04","class":"ImageResource","levels":[{"url":"media/res_65C5FE9C_731C_55DB_41BC_B054578C5F04_0.webp","class":"ImageResourceLevel","height":10,"width":10}]},{"click":"this.showPopupPanoramaOverlay(this.popup_6467B73F_7324_F4D5_41B2_965BFE9F5F29,{'rollOverBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconColor':'#888888','rollOverIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingLeft':5,'paddingBottom':5,'pressedIconWidth':20,'rollOverBackgroundOpacity':1,'borderRadius':0,'paddingTop':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'paddingRight':5,'rollOverIconLineWidth':2,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':2,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':1,'pressedIconLineWidth':2,'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBackgroundOpacity':1,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0},this.ImageResource_643E478A_731C_73BF_41D4_251B0D0AE2D3,null,null,null,false)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_66DC5C2E_732C_74F7_41CC_39ED8643449A","class":"HotspotPanoramaOverlayArea"},{"id":"res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C","class":"ImageResource","levels":[{"url":"media/res_65C4DEA2_731C_55EE_419F_2E8C25A00E5C_0.webp","class":"ImageResourceLevel","height":10,"width":10}]},{"click":"this.showPopupPanoramaOverlay(this.popup_6B3932F4_731D_AD6B_41DA_FABF10A8B41D,{'rollOverBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconColor':'#888888','rollOverIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingLeft':5,'paddingBottom':5,'pressedIconWidth':20,'rollOverBackgroundOpacity':1,'borderRadius':0,'paddingTop':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'paddingRight':5,'rollOverIconLineWidth':2,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':2,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':1,'pressedIconLineWidth':2,'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBackgroundOpacity':1,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0},this.ImageResource_6403178E_731C_73B7_41DC_38BF16B57DC3,null,null,null,false)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_6B1271C9_732C_6FBA_41B6_5DCC782BDC09","class":"HotspotPanoramaOverlayArea"},{"click":"this.showPopupPanoramaOverlay(this.popup_648B99FD_731C_FF55_41B6_117006D1CB09,{'rollOverBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconColor':'#888888','rollOverIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingLeft':5,'paddingBottom':5,'pressedIconWidth':20,'rollOverBackgroundOpacity':1,'borderRadius':0,'paddingTop':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'paddingRight':5,'rollOverIconLineWidth':2,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':2,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':1,'pressedIconLineWidth':2,'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBackgroundOpacity':1,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0},this.ImageResource_6402B78E_731C_73B7_41CC_D30EB339B51D,null,null,null,false)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_64970EDF_732B_D555_41C2_8F7F756CC146","class":"HotspotPanoramaOverlayArea"},{"click":"this.showPopupPanoramaOverlay(this.popup_643DE01D_7364_ECD5_41D4_1309DC20C98E,{'rollOverBorderColor':'#000000','backgroundColorDirection':'vertical','pressedIconColor':'#888888','rollOverIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingLeft':5,'paddingBottom':5,'pressedIconWidth':20,'rollOverBackgroundOpacity':1,'borderRadius':0,'paddingTop':5,'pressedBackgroundColorDirection':'vertical','borderSize':0,'paddingRight':5,'rollOverIconLineWidth':2,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':2,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':1,'pressedIconLineWidth':2,'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBackgroundOpacity':1,'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0},this.ImageResource_6B53F625_737C_D4EA_41C8_6DB4C643F394,null,null,null,false)","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_6B5E72BE_7365_ADD7_41BC_35E8109E89BA","class":"HotspotPanoramaOverlayArea"}],"minWidth":0,"scripts":{"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setLocale":TDV.Tour.Script.setLocale,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"clone":TDV.Tour.Script.clone,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"openLink":TDV.Tour.Script.openLink,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"mixObject":TDV.Tour.Script.mixObject,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"unregisterKey":TDV.Tour.Script.unregisterKey,"existsKey":TDV.Tour.Script.existsKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"quizStart":TDV.Tour.Script.quizStart,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getPixels":TDV.Tour.Script.getPixels,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getKey":TDV.Tour.Script.getKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizFinish":TDV.Tour.Script.quizFinish,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"init":TDV.Tour.Script.init,"registerKey":TDV.Tour.Script.registerKey,"toggleVR":TDV.Tour.Script.toggleVR,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"executeJS":TDV.Tour.Script.executeJS,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"startMeasurement":TDV.Tour.Script.startMeasurement,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"isPanorama":TDV.Tour.Script.isPanorama,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"createTween":TDV.Tour.Script.createTween,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playAudioList":TDV.Tour.Script.playAudioList,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoForward":TDV.Tour.Script.historyGoForward,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"disableVR":TDV.Tour.Script.disableVR,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"enableVR":TDV.Tour.Script.enableVR,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"historyGoBack":TDV.Tour.Script.historyGoBack,"downloadFile":TDV.Tour.Script.downloadFile,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"initQuiz":TDV.Tour.Script.initQuiz,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"translate":TDV.Tour.Script.translate,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"getOverlays":TDV.Tour.Script.getOverlays,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setValue":TDV.Tour.Script.setValue,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction},"scrollBarColor":"#000000","width":"100%","left":447.5,"backgroundColorRatios":[0],"layout":"absolute","children":["this.MainViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"propagateClick":false,"gap":10,"height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.2.10, Fri Feb 20 2026